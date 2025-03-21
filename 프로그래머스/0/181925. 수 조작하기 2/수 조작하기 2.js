function solution(numLog) {
    const commandMap = {"1": 'w', "-1": 's', "10": 'd', "-10": 'a'};
    return numLog.slice(1).map((num, i) => commandMap[(num - numLog[i]).toString()]).join('');
}
