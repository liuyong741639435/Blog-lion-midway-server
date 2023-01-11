/** 生成token 解析token */

// import SecretKey from './secretKey';
import { JwtService } from '@midwayjs/jwt';
import config from '../config/config.default';

// 生成非对称密钥
// const { prikey, pubkey } = new SecretKey();
const prikey = `-----BEGIN PRIVATE KEY-----
MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAqj3aIuwTvyt4oZq5
F73p7SPAWKc+OZ5wyYOX2gxW//XXEArNodqzx9MTgwkPNOtWriuhaRwcUrIAW0hg
yVtXlwIDAQABAkEAkQQTFwBmacgMAA0echzycXCs3lfIZ6iRhvazmag9S9ajcVzD
5qrWvxajzAhnCcIqKiY9eIZubRUNxgWzyQp4kQIhAPjEeA10hZ0Ch04+VXxa9g53
VdNHFhuEq70mJwGvwuPVAiEArzDt9DokMKJdd5yGgoaRESqSO39vI6Fx5MPih753
v7sCIQC6xSctUvKN8zwK7pnYB6L9MXNqcNCUUINwO5jFl2RHEQIgfvxofu7l7JrE
RT8gANypqlfBR39Hf/w2Iiwat2pIQqECIFxMrgMMrYXOEOflBG2fmUzb5uVmw+Gm
GVYuZ6Rihxzh
-----END PRIVATE KEY-----`;
const pubkey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKo92iLsE78reKGauRe96e0jwFinPjme
cMmDl9oMVv/11xAKzaHas8fTE4MJDzTrVq4roWkcHFKyAFtIYMlbV5cCAwEAAQ==
-----END PUBLIC KEY-----`;

const jwtService = new JwtService();

// 生成token
async function getToken<T extends object>(data: T) {
  return await jwtService.sign(data, prikey, {
    algorithm: 'RS256', // 加密算法
    expiresIn: config.jwt.expiresIn, // 到期日
    // issuer
  });
}

// 解析token
async function verifyToken(token: string): Promise<any> {
  return await jwtService.verify(token, pubkey, { complete: false });
}

export { getToken, verifyToken };
