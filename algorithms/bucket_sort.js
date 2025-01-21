{
    function bucketSort(nums) {
        let k = nums.length / 2;
        buckets = Array(k);
        let u = 0;
        while (u < k) {
            buckets[u] = [];
            u++;
        }
        // distribute to each bucket
        for(let i = 0; i < nums.length; i ++) {
            let j = Math.floor((nums[i] * k))
            buckets[j].push(nums[i]);
        }
        // sort
        for(let i = 0; i < buckets.length; i++) {
            buckets[i].sort();
        }
        // merge 
        var sorted = [];
        for(let i = 0; i < buckets.length; i++) {
            sorted.push(...buckets[i])
        }
        console.log(buckets, sorted);
        return sorted;
    }

    const nums = [0.49, 0.96, 0.82, 0.09, 0.57, 0.43, 0.91, 0.75, 0.15, 0.37];
    bucketSort(nums);

}
