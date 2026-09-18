import time
import sys

def calculate_grade(mark):
    if mark >= 80:
        return "A+"
    elif mark >= 70:
        return "A"
    elif mark >= 60:
        return "B"
    elif mark >= 50:
        return "C"
    elif mark >= 40:
        return "D"
    else:
        return "Fail"

def show_loading_animation(duration=2):
    """Displays a simple terminal loading animation."""
    animation = "|/-\\"
    end_time = time.time() + duration
    while time.time() < end_time:
        for i in range(len(animation)):
            sys.stdout.write(f"\rCalculating... {animation[i]}")
            sys.stdout.flush()
            time.sleep(0.1)
    print("\rDone!          ")

def main():
    try:
        mark = int(input("Enter your mark: "))
        if 0 <= mark <= 100:
            show_loading_animation()
            print(f"Grade: {calculate_grade(mark)}")
        else:
            print("Please enter a mark between 0 and 100.")
    except ValueError:
        print("Invalid input! Please enter an integer.")

if __name__ == "__main__":
    main()