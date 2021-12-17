# Solution dari saya
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    highest = -101
    second = -101
    
    for num in arr:
        if(num > highest):
            second = highest
            highest = num
        elif(num > second and num != highest):
            second = num
    
    
    print(second)
    
# Solution dari pembahasan di kelas
if __name__ == '__main__':
  n = int(input())
  arr = input.split(' ')
  numbers = []
  
  for i in range(n):
      numbers.append(int(arr[i]))
  
  numbers.sort()
  
  max = numbers[n-1]
  
  idx = n-1
  found = False
  
  while(idx >= 0 and found):
      if(numbers[idx] < max):
          found = True
      else:
        idx -= 1
  
  if(found):
      print(numbers[idx])
  else:
      print(max)
