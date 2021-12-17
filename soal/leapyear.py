#Solusi dari saya
def is_leap(year):
    leap = False
    
    # Write your logic here
    if(year % 100 == 0):
        leap = year % 400 == 0
    else:
        leap = year % 4 == 0
    
    return leap

#Solusi General to Specific
def is_leap(year):
    leap = False
    
    # Write your logic here
    if(year % 4 == 0):
        leap = True
    if(year % 100 == 0):
        leap = False
    if(year % 400 == 0):
        leap = True
    
    return leap

#Solusi Specific to General
def is_leap(year):
  
    #Write your logic here
    if(year % 400 == 0):
        return True
    elif(year % 100 == 0):
        return False
    elif(year % 4 == 0):
        return True
    else:
        return False
  
# PROGRAM UTAMA, TIDAK DISUBMIT
# if __name__ == '__main__':
#   year = int(input())
#   print(is_leap(year))
