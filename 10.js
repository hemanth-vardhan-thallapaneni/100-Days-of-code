nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

    var merge = function(nums1, m, nums2, n) {
        
        let nums1_values = nums1.length ? nums1.slice(0,m) : [];
        let nums2_values = nums2.length ? nums2.slice(0,n) : [];
        nums1.length=0;
        nums1.push(...nums1_values,...nums2_values);
        return nums1.sort(function(a,b){
            return a-b;
        });
        
    };
console.log(merge(nums1,m,nums2,n));