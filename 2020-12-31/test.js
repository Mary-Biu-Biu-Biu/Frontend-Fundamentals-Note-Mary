var reverseBetween = function (head, m, n) {
    // 特殊情况：m和n相同，链表不需要变化
    if (m === n) return head

    // 初始化需要reverse的部分的首尾节点
    let subhead = null,
        subtail = null
    // 输出的新头部
    let root = head
    // 计数器：判断链表当前节点是否需要reverse
    let count = 1
    // 记录reverse当前节点的上一个节点
    let prev = null

    // 循环链表中的节点，停止条件：到达null
    while (head !== null) {
        // 获取当前节点，并先前进到下一位（因为当前节点的指针会变化）
        let current = head
        head = head.next

        // 还没到m，更新subhead（反转后指向反转sub链表的头部）
        if (count < m) {
            subhead = current
        }

        // 到了第一个要反转的节点，把当前节点先指向null
        // 并开始更新prev（方便后续节点反转）
        // 并更新subtail：m-n翻转后的尾部
        else if (count === m) {
            current.next = null
            subtail = current
            prev = current
        }

        // m-n的部分：进行翻转
        else if (count <= n) {
            current.next = prev
            prev = current
            // 到了n：更新subtail和subhead的指向
            // 防止m=1，那么开头就要反转，subhead肯定是初始的null了，其实这时候不需要把subhead的指向更新
            // 唯一要注意的是，root会发生变化，会变成m-n反转前的尾部节点，即当前节点
            if (count === n) {
                if (m === 1) {
                    root = current
                    subtail.next = head
                } else {
                    subhead.next = current
                    subtail.next = head
                }
                // m-n反转完毕，可以直接结束循环了
                break
            }
        }
        count++
    }

    // 返回新的root
    return root
}

console.log(search([3, 1], 1))
