import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, Dimensions, Alert, ActivityIndicator } from 'react-native';
import { API_URL } from '../constants/ENV';

import { RootStackParamList } from '../types';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../constants/context';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [err, setErr] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);
    const { signIn } = React.useContext(AuthContext);

    let login = async () => {
        setLoading(true)
        // let response = await fetch(API_URL+'/api/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     })
        // }). then( res => res.json())
        // .catch(err => Alert.alert('Terjadi kesalahan.'))
        // if (response && response.message) {
        //     let errMSG = response.message
        //     for (const key in response.errors) {
        //         if (Object.prototype.hasOwnProperty.call(response.errors, key)) {
        //             const val = response.errors[key];
        //             errMSG += '\n' + val
        //         }
        //     }
        //     setErr(errMSG)
        //     setLoading(false)
        //     return null
        // }
        // else if (response) {
        //     // Alert.alert(response.access_token)
        //     setErr('')
        //     SecureStore.setItemAsync('access_token',response.access_token)
        //     return response
        // }
        // setLoading(false)

    }

    return (
        <><View style={styles.container}>
            <ImageBackground source={{uri:'data:image/jpeg;base64,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'}} imageStyle={{ opacity: 0.1 }} resizeMode="contain" style={styles.head}>
                <Text style={styles.title}>Masuk</Text>
                <Text style={styles.subtitle}>Masukan informasi untuk{"\n"}mengakses akunmu</Text>
            </ImageBackground>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#E3EDE1"
                    autoCapitalize="none"
                    onChangeText={(email) => setEmail(email)} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#E3EDE1"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(password) => setPassword(password)} />
            </View>
            {err ? (<Text style={styles.err}>{err}</Text>) : null}
            <TouchableOpacity onPress={async () => { signIn({user: {email: 'naufalalim1112@gmail.com'}, access_token: 'ganteng'}); } } style={styles.link}>
                <Text style={styles.linkText}>MASUK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link2}>
                <Text style={styles.linkText2}>Belum punya akun? Daftar!</Text>
            </TouchableOpacity>
        </View>{isLoading?<ActivityIndicator
                animating={true}
                style={styles.indicator}
                size="large"
                color="#ffffff" />:null}</>
    );
}

const styles = StyleSheet.create({
    head: {
        width: 200,
        height: 200,
        justifyContent: 'flex-end',
        marginBottom: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 15,
        color: '#205072',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 15,
        color: '#205072',
        opacity: 0.5
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
        width: Dimensions.get("window").width / 1.5,
        backgroundColor: '#319CEC',
        borderRadius: 30,
    },
    linkText: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
    },
    inputContainer: {
        shadowColor: '#E3EDE1',
        shadowRadius: 10,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        elevation: 3,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: Dimensions.get("window").width / 1.5,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    TextInput: {
        color: '#205072',
    },
    link2: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText2: {
      fontSize: 14,
      color: '#2e78b7',
    },
    err: {
        color: '#eb4034',
        fontSize: 10,
    },
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});
