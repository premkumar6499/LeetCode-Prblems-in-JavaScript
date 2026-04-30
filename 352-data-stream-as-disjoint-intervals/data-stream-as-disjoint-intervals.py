class SummaryRanges:

    def __init__(self):
        # Using a set to keep track of seen numbers for O(1) lookups
        self.nums = set()

    def addNum(self, value: int) -> None:
        self.nums.add(value)

    def getIntervals(self) -> list[list[int]]:
        if not self.nums:
            return []
        
        # Sort the unique numbers seen so far
        sorted_nums = sorted(list(self.nums))
        res = []
        
        start = sorted_nums[0]
        end = sorted_nums[0]
        
        for i in range(1, len(sorted_nums)):
            # If the number is consecutive, extend the current interval
            if sorted_nums[i] == end + 1:
                end = sorted_nums[i]
            else:
                # Discontinuity found, close the current interval and start a new one
                res.append([start, end])
                start = end = sorted_nums[i]
        
        # Append the final interval
        res.append([start, end])
        return res
