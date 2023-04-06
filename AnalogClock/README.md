## Digital Clock from Analog Clock?
I was inspired and impressed the first time seeing from a Facebook post. 
![bandicam 2023-04-05 21-31-17-611](https://user-images.githubusercontent.com/60019805/230252632-231ffe33-ecbb-4dee-aaa6-ce15dfa0e420.gif)


## Breakdown the problem
![bandicam 2023-04-05 21-19-57-108](https://user-images.githubusercontent.com/60019805/230252661-880508e8-1ace-4f74-8498-4efd81b82f38.gif)

As we can see, a Digital Number is being shown as an analogue clock. However, look closer at a digital number created by a group of analogue watches. And each clock has its target and position to make the digital number. 

** How to make the analogue clockwise rotate? **
There is a clock interval function that will be responsible for animation clockwise. However, how does the clock know how it should move clockwise? 
- Take a look at `data.js`; we can see the data, each time equivalent to each degree. There is only four positions we need to use for an analogue clock. `0` will be `0` degree. `3` will be `90`. `6` will be `180` degree. and `9` will be `270`. `12` which is `0` and the same `0` degree or `360`. **Based on that, we can make the analogue clockwise turn.**
![bandicam 2023-04-05 21-20-55-852](https://user-images.githubusercontent.com/60019805/230252681-9c762d58-77b1-46d5-b44b-5ceecf7cefcd.gif)

**Data.js**
`Data.js` file is the backbone of the project. Based on what we did, we can now make the clockwise turn using time. For example, in "03:30", the hour hand will be at `90` degrees, and the minute hand will be `180` degrees. 
So to create the digital number 0. we need a group of analogue clocks with a specific set of times to display 0. There are 4x6 clocks in a group. 
Moving on, we can also set numbers 1 to 12 with this method.
![bandicam 2023-04-05 21-21-54-527](https://user-images.githubusercontent.com/60019805/230252692-c3c81efa-7270-453f-abdb-393cf641d45c.gif)
