/* eslint-disable one-var,block-spacing,comma-spacing,no-array-constructor,space-infix-ops,space-before-blocks,space-before-function-paren,quotes,no-return-assign,semi-spacing,keyword-spacing,no-sequences,no-unused-expressions */
export function imeiGeneration(){
  let r, o, n = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), t = 0, a = 0,
    e = ['01', '10', '30', '33', '35', '44', '45', '49', '50', '51', '52', '53', '54', '86', '91', '98', '99'],
    f = e[Math.floor(Math.random() * e.length)].split('')
  for(n[0]=Number(f[0]),n[1]=Number(f[1]),r=2; r<14;)n[r++]=Math.floor(10*Math.random())%10;for(0,r=0; r<14; r++)(r+0)%2?((a=2*n[r])>9&&(a-=9),t+=a):t+=n[r];return o=(10-t%10)%10,n[14]=o,a=(a=n.join("")).substr(0,15)
}
