export function areAnagrams(word1:string, word2:string):boolean{
    if (word1.length !== word2.length) {
        return false;
    }
    const str1 = word1.split('').sort().join('');
    const str2 = word2.split('').sort().join('');

    return str1 === str2;
}