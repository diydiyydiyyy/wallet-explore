import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { HDNodeWallet, Wallet, JsonRpcProvider } from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

export default function Password() {
  
  const [password, setPassword] = useState('');
  const [phrase, setPhrase] = useState('');
  const [wallet, setWallet] = useState(null);

  const provider = new JsonRpcProvider(
    'https://mainnet.infura.io/v3/990937c87dea43fda38b3ed22a6a154f'
  );

  const createWallet = () => {
    const mnemonic = Wallet.createRandom().mnemonic;
    setPhrase(mnemonic?.phrase!);

    const wallet = HDNodeWallet.fromMnemonic(mnemonic!);

    wallet.connect(provider);
    setWallet(wallet);

    encryptAndStorePrivateKey();
  };

  const encryptAndStorePrivateKey = async () => {
    const encryptedPrivateKey = Crypto?.createCipher('aes-256-cbc', password);
    const encryptedBuffer = Buffer.concat([
      encryptedPrivateKey.update(Buffer.from(wallet?.privateKey!)),
      encryptedPrivateKey.final(),
    ]);

    try {
      // Use AsyncStorage to store the encrypted private key
      await AsyncStorage.setItem('encryptedPrivateKey', encryptedBuffer.toString('base64'));
    } catch (error) {
      console.error('Error storing encrypted private key:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Input Password :</Text>
      <TextInput value={password} onChangeText={(e) => setPassword(e)} placeholder='Input Password' style={styles.input} />
      <TouchableOpacity style={[styles.button, {backgroundColor: password?.length < 8 ? '#772174BF' : '#772174'}]} onPress={createWallet} disabled={password?.length < 8}>
        <Text style={styles.buttonText}>Create Wallet</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 32,
    paddingVertical: 16
    
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'none',
  },
});
