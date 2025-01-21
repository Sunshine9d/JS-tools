{
    var nums = [1, 3, 6, 8, 12, 15, 23, 26, 31, 35];
    nums = new Array(100000);
    var i = 0;
    while (i < 100000) {
        nums[i] = i;
        i++;
    }
    function binarySearch(nums, target) {
        var i = 0;
        var j = nums.length - 1;
        let m = 0;
        while (i <= j) {
            m =  (i + j)/2 | 0; 
            if (nums[m] < target) {
                i = m + 1;
            } else if(nums[m] > target) {
                j = m - 1;
            } else {
                return m;
            }
        }
        return -1;
    }
   console.time('binarySearch');
   console.log( binarySearch(nums, 99000));
   console.timeEnd('binarySearch');

    function search(nums, target) {
        var i = 0;
        var j = nums.length - 1;
        let m = 0;
        while (i <= j) {
           if(nums[i] === target){
               return i;
           }
            i++;
        }
        return -1;
    }

   console.time('binarySearch1');
   console.log( search(nums, 99000));
   console.timeEnd('binarySearch1');

    var nums1 = [1, 3, 6, 6, 6, 6, 10, 12, 15];
    function binarySearchInsertion(nums1, target) {
        var i = 0;
        var j = nums1.length - 1;
        var m = 0;
        while (i <= j) {
            m = (i+j)/2 | 0;
            if(nums1[m] < target) {
                i = m + 1;
            } else if (nums1[m] > target) {
                j = m - 1;
            } else {
                j = m - 1;
            }
        }
        return i;
    }

    console.log('Insert 6: postition', binarySearchInsertion(nums1, 6));

}
