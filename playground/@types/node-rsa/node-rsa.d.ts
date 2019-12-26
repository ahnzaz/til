
declare module 'node-rsa' {
    namespace NodeRsaNS{

        interface Buffer { }
        
        interface NodeRsa {
            decrypt(message: string, encoding?: string): Buffer;
            encrypt(message: string, encoding?: string): Buffer;
        }
        
        interface NodeRsaConstructor {
            new(privateKey: string): NodeRsa;
        }
    }

    const NodeRsaNS:NodeRsaNS.NodeRsaConstructor;

    export = NodeRsaNS;
}

