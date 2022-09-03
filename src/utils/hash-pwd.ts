import * as crypto from 'crypto';

export const hashPwd = (p: string): string => {
  const hmac = crypto.createHmac(
    'sha512',
    'jmiadm41#@# 32fdnmi243jrtfisidfu2 344rf ESFIUW$JI@$(#%I(%J @($RFSDNIFSDJKIFJ@#I$%J!#I$J@I!$J!#@I$J@I$J!@$JSDgtrwet 24okfs AwareSFIOF',
  );
  hmac.update(p);
  return hmac.digest('hex');
};
