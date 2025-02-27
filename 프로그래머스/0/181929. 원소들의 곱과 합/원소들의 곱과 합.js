function solution(num_list) {
    let multi = num_list.reduce((multi,now)=>{
        return multi*=now;
    });
    let sum = num_list.reduce((sum,now)=>{
        return sum+=now;
    });
    var answer = multi<(sum**2)?1:0;
    return answer;
}