#include <vector>
using namespace std;

int BinarySearchRec(vector<int> &arr, int left, int right, int target)
{
    if (left > right)
        return -1;

    int mid = left + ((right - left) / 2);

    if (arr.at(mid) == target)
        return mid;

    if (arr.at(mid) > target)
        return BinarySearchRec(arr, left, mid - 1, target);

    return BinarySearchRec(arr, mid + 1, right, target);
}
