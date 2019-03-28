function sum(nums){
	var total = 0;
	for(var i=0;i<nums.length;i++){
		total += nums[i];
	}
	return total;
}

function multiply(nums){
	var total = nums[0];
	for(var i=1;i<nums.length;i++){
		total *= nums[i];
	}
	return total;
}