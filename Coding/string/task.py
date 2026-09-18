text = input("Enter Something: ")
find = input("What you want to find? ").lower()   #.lower() means that you can use lower and upper case letter

#print(find in text)

if find in text:
    print("Found")
else:
    print("Not Found")