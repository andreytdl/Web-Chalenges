function solution(x, y, d) {
    const space = y - x;
    return Math.ceil(space/d);
}