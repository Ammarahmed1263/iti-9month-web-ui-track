#include <vector>
using namespace std;

int BinarySearchItr(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + ((right - left) / 2); // prevents integer overflow

        if (arr.at(mid) == target) return mid;
        else if (arr.at(mid) > target) right = mid - 1;
        else left = mid + 1;    
    }

    return -1;
}
