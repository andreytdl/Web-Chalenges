<h1>Cyclic Rotation</h1>
<br>
<h3>Task description</h3>

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
<br>
The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
<br>
Write a function:
<br>
    function solution(A, K);
<br>
that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
<br>
For example, given<br>
    A = [3, 8, 9, 7, 6]<br>
    K = 3<br>
<br>
the function should return [9, 7, 6, 3, 8]. Three rotations were made:<br>
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]<br>
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]<br>
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]<br>
<br>
For another example, given<br>
    A = [0, 0, 0]<br>
    K = 1<br>
<br>
the function should return [0, 0, 0]<br>
<br>
Given<br>
    A = [1, 2, 3, 4]<br>
    K = 4<br>
<br>
the function should return [1, 2, 3, 4]<br>
<br>
Assume that:<br>
<br>
        N and K are integers within the range [0..100];
        each element of array A is an integer within the range [−1,000..1,000].
<br>
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
