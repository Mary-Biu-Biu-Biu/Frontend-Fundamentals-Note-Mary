/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 初始化边界index
    let start = 0
    let end = nums.length - 1

    // 循环条件：小于等于，因为只剩一个数字的时候，start和end相等，依然需要判断mid
    while (start <= end) {
        // 找到中间index（Math.floor比parseInt快很多）
        let mid = Math.floor((end + start) / 2)

        // 对比中间值，若相等，可以直接返回
        if (nums[mid] === target) {
            return mid
        }

        // 判断前半段是否有序：把start值和mid对比而不是mid-1
        // =》因为只剩一个数字的时候，start=mid=end
        // ===》（那如果mid-1就成了start范围以外的了）
        // =》小于等于：这里必须有等号，否则
        if (nums[start] < nums[mid]) {
            // 判断
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1
            }
            // target not in first part
            else {
                start = mid + 1
            }
        }
        // 前半段无序，那么后半段一定有序
        else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1
            }
            // target not in last part
            else {
                end = mid - 1
            }
        }
    }
    return -1
}

console.log(search([3, 1], 1))
