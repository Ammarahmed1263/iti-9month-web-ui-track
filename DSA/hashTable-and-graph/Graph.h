#include <iostream>
#include <queue>
#include <stack>
#include <climits>

template <typename VertexType>
class Graph
{
public:
    explicit Graph()
    {
        makeEmpty();
    }

    int getIndex(const VertexType &vertex)
    {
        for (int i = 0; i < vertexCount; i++)
        {
            if (vertexLabels[i] == vertex)
            {
                return i;
            }
        }

        return -1;
    }

    void addVertex(const VertexType &vertex)
    {
        if (isFull())
        {
            std::cout << "Graph is full!" << std::endl;
            return;
        }

        vertexLabels[vertexCount] = vertex;

        for (int i = 0; i <= vertexCount; i++)
        {
            adjMatrix[vertexCount][i] = 0;
            adjMatrix[i][vertexCount] = 0;
        }

        vertexCount++;
    }

    void getAdjVertices(VertexType vertex, std::queue<VertexType> &neighbors)
    {
        int fromIndex = getIndex(vertex);

        if (fromIndex == -1)
        {
            std::cout << "Vertex doesn't exist" << std::endl;
            return;
        }

        for (int i = 0; i < vertexCount; i++)
        {
            if (adjMatrix[fromIndex][i] != 0)
            {
                neighbors.push(vertexLabels[i]);
            }
        }
    }

    int getEdgeWeight(VertexType fromVertex, VertexType toVertex)
    {
        int from = getIndex(fromVertex);
        int to = getIndex(toVertex);

        if (from != -1 && to != -1)
        {
            return adjMatrix[from][to];
        }

        return 0;
    }

    void addEdge(VertexType fromVertex, VertexType toVertex, int weight)
    {
        int from = getIndex(fromVertex);
        int to = getIndex(toVertex);

        if (from == -1 || to == -1)
        {
            std::cerr << "Error: One or both vertices not found" << std::endl;
        }
        else
        {
            adjMatrix[from][to] = weight;
        }
    }

    void makeEmpty()
    {
        for (int i = 0; i < MAX_VERTICES; i++)
        {
            for (int j = 0; j < MAX_VERTICES; j++)
            {
                adjMatrix[i][j] = 0;
            }
        }

        clearMarks();
        vertexCount = 0;
    }

    bool isEmpty()
    {
        return vertexCount == 0;
    }

    bool isFull()
    {
        return vertexCount == MAX_VERTICES;
    }

    void markVertex(VertexType vertex)
    {
        int index = getIndex(vertex);

        if (index == -1)
        {
            std::cout << "Vertex doesn't exist" << std::endl;
            return;
        }

        visitMarks[index] = true;
    }

    void clearMarks()
    {
        for (int i = 0; i < MAX_VERTICES; i++)
        {
            visitMarks[i] = false;
        }
    }

    bool isMarked(VertexType vertex)
    {
        int index = getIndex(vertex);

        if (index != -1)
            return visitMarks[index];

        return false;
    }

    void DFS(const VertexType &startVertex, const VertexType &endVertex)
    {
        if (getIndex(startVertex) == -1 || getIndex(endVertex) == -1)
        {
            std::cout << "One or both vertices do not exist." << std::endl;
            return;
        }

        std::stack<VertexType> st;
        clearMarks();
        bool found = false;

        st.push(startVertex);

        while (!st.empty())
        {
            VertexType current = st.top();
            st.pop();

            if (isMarked(current))
                continue;

            markVertex(current);
            std::cout << "Visiting: " << current << std::endl;

            if (current == endVertex)
            {
                found = true;
                break;
            }

            std::queue<VertexType> neighbors;
            getAdjVertices(current, neighbors);

            while (!neighbors.empty())
            {
                VertexType neighbor = neighbors.front();
                neighbors.pop();

                if (!isMarked(neighbor))
                {
                    st.push(neighbor);
                }
            }
        }

        if (found)
            std::cout << "Path exists to the end vertex!" << std::endl;
        else
            std::cout << "No path found." << std::endl;
    }

    void BFS(const VertexType &startVertex, const VertexType &endVertex)
    {
        if (getIndex(startVertex) == -1 || getIndex(endVertex) == -1)
        {
            std::cout << "One or both vertices do not exist." << std::endl;
            return;
        }

        std::queue<VertexType> q;
        clearMarks();
        bool found = false;

        markVertex(startVertex);
        q.push(startVertex);

        while (!q.empty())
        {
            VertexType current = q.front();
            q.pop();

            std::cout << "Visiting: " << current << std::endl;

            if (current == endVertex)
            {
                found = true;
                break;
            }

            std::queue<VertexType> neighbors;
            getAdjVertices(current, neighbors);

            while (!neighbors.empty())
            {
                VertexType neighbor = neighbors.front();
                neighbors.pop();

                if (!isMarked(neighbor))
                {
                    markVertex(neighbor);
                    q.push(neighbor);
                }
            }
        }

        if (found)
            std::cout << "Path exists to the end vertex!" << std::endl;
        else
            std::cout << "No path found." << std::endl;
    }

    void dijkstra(const VertexType &startVertex)
    {
        int start = getIndex(startVertex);

        if (start == -1)
        {
            std::cout << "Start vertex does not exist." << std::endl;
            return;
        }

        int distances[MAX_VERTICES];
        for (int i = 0; i < MAX_VERTICES; i++)
        {
            distances[i] = INT_MAX;
        }

        distances[start] = 0;
        clearMarks();

        typedef std::pair<int, VertexType> Element;
        std::priority_queue<Element, std::vector<Element>, std::greater<Element>> pq;

        pq.push({0, startVertex});

        while (!pq.empty())
        {
            int currentDistance = pq.top().first;
            VertexType current = pq.top().second;

            pq.pop();

            if (isMarked(current))
                continue;
            markVertex(current);

            std::queue<VertexType> neighbors;
            getAdjVertices(current, neighbors);

            while (!neighbors.empty())
            {
                VertexType neighbor = neighbors.front();
                neighbors.pop(); // 2

                int uIndex = getIndex(current);
                int vIndex = getIndex(neighbor);
                int edgeWeight = getEdgeWeight(current, neighbor);

                int newDist = distances[uIndex] + edgeWeight;

                if (distances[vIndex] > newDist)
                {
                    distances[vIndex] = newDist;
                    pq.push({newDist, neighbor});
                }
            }
        }

        std::cout << "\n--- Shortest Distances from " << startVertex << " ---" << std::endl;
        for (int i = 0; i < vertexCount; i++)
        {
            std::cout << "To " << vertexLabels[i] << " : ";
            if (distances[i] == INT_MAX)
                std::cout << "Unreachable";
            else
                std::cout << distances[i];
            std::cout << std::endl;
        }
    }

private:
    static const int MAX_VERTICES = 50;

    int vertexCount;
    VertexType vertexLabels[MAX_VERTICES];
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
    bool visitMarks[MAX_VERTICES];
};