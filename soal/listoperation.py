if __name__ == '__main__':
    N = int(input())
    l = []
    
    for i in range(N):
        inp = input().split()
        cmd = inp[0]
        
        arg = inp[1:]
        
        if(cmd == "insert"):
            l.insert(int(arg[0]), int(arg[1]))
        elif(cmd == "print"):
            print(l)
        elif(cmd == "remove"):
            l.remove(int(arg[0]))
        elif(cmd == "append"):
            l.append(int(arg[0]))
        elif(cmd == "sort"):
            l.sort()
        elif(cmd == "pop"):
            l.pop()
        elif(cmd == "reverse"):
            l.reverse()
