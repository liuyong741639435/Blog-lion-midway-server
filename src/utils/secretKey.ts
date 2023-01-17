/*使用node-rsa生成秘钥对*/

import * as NodeRSA from 'node-rsa';
import { NodeEnv } from '../type';

export default class SecretKey {
  pubkey = '';
  prikey = '';
  constructor() {
    // 本地开发就不每次都刷新key了。
    // local与
    if (process.env.NODE_ENV === NodeEnv.Local) {
      this.pubkey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIIW8jAFfnMmkDIByPo10e9La5JeCcLL
jOxXO8xiUAUC21U/IWQ2R9ZVHTfse1WEvswvi9qbqkPBDBiHIHQAio8CAwEAAQ==
-----END PUBLIC KEY-----`;
      this.prikey = `-----BEGIN PRIVATE KEY-----
MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAghbyMAV+cyaQMgHI
+jXR70trkl4JwsuM7Fc7zGJQBQLbVT8hZDZH1lUdN+x7VYS+zC+L2puqQ8EMGIcg
dACKjwIDAQABAkAMIVWd8rUyyZLChvYVlrUnqhGyyUABwPc4Bn5V9Yjenp5NOg9Q
g62FwvyBkWkU0vuI2npcJn632DGxDS2KHm8pAiEAzXjT7demTSMKE/+SutjnIvQJ
c+ROnNZ25VLzhOoGlZ0CIQCiFInX6G5hcTVooEmN9KHzUi3ANvInLRLKQ8KAYXff
GwIhAIJb1UFBnx2zTFKRxBrNQB956oFfaMyyeC5YKW27OEA1AiEAmIWLUcpAVSIb
iGGN1jAnVro2o3MRXRxlWkF5fyY5j5ECIBpAQGUjl030YNZfhvNZd60ZPt32xoqW
EL44z911zReq
-----END PRIVATE KEY-----`;
    } else {
      const key = new NodeRSA({ b: 512 });
      this.pubkey = key.exportKey('pkcs8-public');
      this.prikey = key.exportKey('pkcs8-private');
    }
  }
}
