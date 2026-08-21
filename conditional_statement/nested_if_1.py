marks = int(input("Marks: "))
attendence = int(input("Attendence%: "))

if marks>=40:
    if attendence>=75:
        print("Passed")
    else:
        print("Attendence too low")
else:
    print("Failled")