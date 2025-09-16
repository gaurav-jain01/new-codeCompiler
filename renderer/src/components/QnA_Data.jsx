export const diyQnA = [
  {
    id: 1,
    classNum: "DIY 1",
    icon: "🧠",
    title: "Class 6: DIY Challenge & Review",
    quote: `Ironman Says:\n"You’ve powered my arc reactor, fired my laser, and even blinked my eyes! Now prove your hero IQ with these questions before you build your own mission!"`,
    goal: `Answer fun multiple-choice questions based on Classes 1 to 5 to test your coding skills and pin knowledge. This will prepare you for the upcoming DIY challenge.`,
    quiz: [
      {
        question: "What does pinMode(8, OUTPUT); do?",
        options: [
          "a) Reads button on pin 8",
          "b) Sets pin 8 to control something like an LED",
          "c) Makes the pin go LOW"
        ],
        answer: "b"
      },
      {
        question: "What happens when you use delay(200); in your code?",
        options: [
          "a) Blinks LED very slowly",
          "b) Pauses the program for 0.2 seconds",
          "c) Turns the LED OFF"
        ],
        answer: "b"
      },
      {
        question: "Which pin was used to blink Ironman’s eye lights?",
        options: ["a) D3", "b) D7", "c) D8"],
        answer: "b"
      },
      {
        question: "What does digitalWrite(4, HIGH); do in Class 3?",
        options: [
          "a) Turns off the laser",
          "b) Reads the value of pin 4",
          "c) Turns ON the laser blaster"
        ],
        answer: "c"
      },
      {
        question: "In Class 5, what does pin D3 control?",
        options: [
          "a) The Arc Reactor",
          "b) Ironman’s Eye LEDs",
          "c) Jet flight lights (hands and legs)"
        ],
        answer: "c"
      },
      {
        question: "What is the purpose of void loop() in Arduino code?",
        options: [
          "a) It runs once",
          "b) It runs code again and again",
          "c) It turns the board off"
        ],
        answer: "b"
      },
      {
        question: "Which pin controls the Arc LED that blinks every second?",
        options: ["a) D8", "b) D3", "c) D6"],
        answer: "a"
      },
      {
        question: "What is the blinking speed in Class 2’s heartbeat LED?",
        options: ["a) 1 second", "b) 0.2 seconds", "c) 2 seconds"],
        answer: "b"
      }
    ],
    think: [
      "What new effect can I create using multiple pins?",
      "Can I make lights blink in a pattern or sequence?",
      "Can I make the arc lights change color with timing?",
      "What happens if I use shorter delays or mix HIGH/LOW across pins?"
    ],
    wrapup: `Now that you’ve completed the quiz, get ready for your DIY Mission , where you’ll build your own Ironman action sequence using what you learned in these previous classes!`
  },

  {
    id: 2,
    classNum: "DIY 2",
    icon: "🧠",
    title: "Class 12: DIY Challenge & Review",
    quote: `Ironman Says:\n"Now it's your turn, Hero! Build your own glowing powers and show me what YOU can do!"`,
    recap: [
      "Blinking Eyes and Arc Lights – Pin control using digitalWrite.",
      "Combining LEDs – Sync and alternate LEDs.",
      "RGB Color Control – Cycle Red, Green, Blue lights.",
      "Laser Effects – Create alerts and laser visuals.",
      "All-ON Power Mode – Turn on multiple lights at once."
    ],
    goal: `Use what you’ve learned in the last 5 classes to build your own Ironman effect — by combining, modifying, or even inventing a new code setup`,
    challenges: [
      {
        title: "Challenge 1: Combine Chest + Eyes",
        description: "Make the chest arc (D8) and eyes (D7) blink together in sync."
      },
      {
        title: "Challenge 2: Laser Burst Pattern",
        description: "Program the laser (D4) to flash twice quickly, then pause."
      },
      {
        title: "Challenge 3: Flying Launch Sequence",
        description: "First turn on lights from D8 → D3 → D7 one after the other like a launch countdown."
      },
      {
        title: "Challenge 4: Rainbow Reactor Pulse",
        description: "Use RGB pins (D5, D6, D9) to change colors every 0.5 seconds while arc D2 blinks."
      }
    ],
    code: `void setup() {\n  // Setup your chosen pins\n}\n\nvoid loop() {\n  // Your custom sequence of actions\n}`,
    tips: [
      {
        title: "💡Experiment With Timing",
        content: `Small changes in the timing (delay) can create big visual differences. For instance, a slower pulse on your chest arc might give it a "powering up" feel.`
      },
      {
        title: "💡Combining Components",
        content: `Don't be afraid to use multiple outputs (like the chest lights, eyes, and lasers) together. The more layers you add, the more dynamic your project will look`
      },
      {
        title: "💡Keep It Simple",
        content: `If you’re stuck, simplify the effect. Start by getting one component to work (like turning an LED on and off) before building up to a full sequence.`
      },
      {
        title: "💡Use the Compiler Terminal",
        content: `If things aren’t working, use the compiler terminal to debug. You can print out status messages to see what’s happening in your code.`
      }
    ],
    wrapup: `Once done, demo your creation to the class or parents.\nLet others guess what Ironman action you’ve recreated!`
  },
  {
  id: 3,
  classNum: "DIY 3",
  icon: "🛠️",
  title: "Class 18: DIY Challenge & Review",
  quote: `Ironman Says:\n"You've learned to control my arc reactor, fire my laser, and light up my jet boots. Now it’s your turn to create your own upgrades to my suit!"`,
  goal: `Use what you’ve learned in the last 5 classes to build your own Ironman effect — by combining, modifying, or even inventing a new code setup.`,
  quiz: [
    {
      question: "What does pinMode(7, OUTPUT); do?",
      options: [
        "a) Turn on a light",
        "b) Set pin 7 to send power out",
        "c) Read sensor value"
      ],
      answer: "b"
    },
    {
      question: "What happens when you press a button connected to A0?",
      options: [
        "a) Nothing",
        "b) It reads HIGH or LOW",
        "c) It glows on its own"
      ],
      answer: "b"
    },
    {
      question: "Which pin controls Ironman’s eye LED?",
      options: [
        "a) D7",
        "b) A6",
        "c) D3"
      ],
      answer: "a"
    },
    {
      question: "What does digitalWrite(4, HIGH); mean?",
      options: [
        "a) Turns ON the device connected to Pin 4",
        "b) Turns OFF the device connected to Pin 4",
        "c) Nothing happen"
      ],
      answer: "a"
    },
    {
      question: "If I want to keep the light on for half a second, what delay should I use?",
      options: [
        "a) wait(500);",
        "b) second(500);",
        "c) delay(500);"
      ],
      answer: "c"
    }
  ],
  challenges: [
    {
      title: "Challenge 1: Spy Mode",
      description: "When someone walks near (IR sensor), blink the eyes twice, then glow chest light.",
      bonus: ""
    },
    {
      title: "Challenge 2: Button Combo Mode",
      description: "One button lights up the eyes. Another lights up the laser.",
      bonus: ""
    },
    {
      title: "Challenge 3: Arc Reactor Burst",
      description: "Press button ➝ All arc LEDs turn on one by one (use delay), then all off.",
      bonus: ""
    },
    {
      title: "Challenge 4: Color Dance Reactor",
      description: "Cycle RGB colors but only when IR sensor is triggered.",
      bonus: ""
    }
  ],
  code: `void setup() {\n  // Setup your chosen pins\n}\n\nvoid loop() {\n  // Your custom sequence of actions\n}`,
  tips: [
    {
      title: "💡Set Pin Modes in setup()",
      content: "Use pinMode(pin, OUTPUT); for lights and pinMode(pin, INPUT); for buttons or sensors."
    },
    {
      title: "💡Use digitalRead() for Buttons & IR Sensors",
      content: "Example: if (digitalRead(A0) == HIGH) checks if a button is pressed."
    },
    {
      title: "💡Control Time with delay()",
      content: "delay(1000); = wait 1 second. Helps make blink or power-up effects!"
    },
    {
      title: "💡Read Sensor Values with analogRead()",
      content: "analogRead(A6); gets values from 0–1023. Use IR distance for advanced effects!"
    }
  ],
  wrapup: `Once done, demo your creation to the class or parents.\nLet others guess what Ironman action you’ve recreated!`
},
{
  id: 4,
  classNum: "DIY 4",
  icon: "🛠️",
  title: "Class 24: DIY Challenge & Review",
  quote: `Ironman Says:\n“You’ve mastered my battle, flight, sensor, and combo systems. Now invent your own mission! Power me up like never before!”`,
  goal: `Use what you’ve learned in the last 5 classes to build a smart, responsive Ironman action — using IR sensors, buttons, RGB LEDs, and logic combinations (AND/OR).`,
  quiz: [
    {
      question: "What does analogRead(A6) return?",
      options: [
        "a) HIGH or LOW",
        "b) A number between 0–1023",
        "c) Nothing"
      ],
      answer: "b"
    },
    {
      question: "What does this mean: if (button == HIGH && sensor == LOW)?",
      options: [
        "a) Button pressed OR sensor sees something",
        "b) Button pressed AND sensor sees nothing",
        "c) Sensor off"
      ],
      answer: "b"
    },
    {
      question: "Which pin is used for Ironman's laser in most examples?",
      options: [
        "a) D7",
        "b) A0",
        "c) D4"
      ],
      answer: "c"
    },
    {
      question: "How can you turn ON both the laser and eyes?",
      options: [
        "a) digitalWrite(D4, HIGH); digitalWrite(D7, HIGH);",
        "b) digitalRead(D4); digitalRead(D7);",
        "c) pinMode(D4, INPUT);"
      ],
      answer: "a"
    },
    {
      question: "What happens if you remove all delay() from your code?",
      options: [
        "a) It runs faster but may blink too quickly",
        "b) Lights won’t turn ON",
        "c) It won’t compile"
      ],
      answer: "a"
    }
  ],
  challenges: [
    {
      title: "Challenge 1: Danger Alert Mode",
      description: "If someone comes close (IR < 400), blink eyes + fire laser.",
      bonus: "Add RGB chest glow as bonus!"
    },
    {
      title: "Challenge 2: Secret Combo Mode",
      description: "Press button AND sensor must be clear → turn ON all lights.",
      bonus: ""
    },
    {
      title: "Challenge 3: Blast Sequence",
      description: "Press button → Light up arc LEDs one-by-one (D2, D8, D10…)",
      bonus: "Add flying LEDs at the end."
    },
    {
      title: "Challenge 4: Smart Reactor",
      description: "Use analogRead from IR.",
      bonus: "If object is too close, switch from green to red chest color."
    }
  ],
  code: `void setup() {\n\n  // Setup your pins here\n\n}\n\nvoid loop() {\n\n  // Custom Ironman action!\n\n}`,
  tips: [
    {
      title: "🔌 Use pinMode() in setup()",
      content: "➤ Set INPUT/OUTPUT properly for each component."
    },
    {
      title: "🧠 Use digitalRead() to check buttons or IR",
      content: "➤ For HIGH/LOW conditions."
    },
    {
      title: "📊 Use analogRead() for advanced sensors",
      content: "➤ Use with IR to detect distance values."
    },
    {
      title: "⏳ Control blink and pattern speed with delay()",
      content: "➤ Example: delay(300); = 0.3 seconds between lights."
    },
    {
      title: "🧪 Test in small parts first",
      content: "➤ Try 1 output before combining multiple effects."
    }
  ],
  wrapup: `Demo your Ironman creation to friends, parents, or your teacher.\nLet them guess your mode: Is it battle mode? Launch mode? Alert?\nYou are now the official Ironman Suit Programmer! 🏅`
},
{
  id: 5,
  classNum: "DIY 5",
  icon: "🛠️",
  title: "Class 30: DIY Challenge & Review",
  quote: `Ironman Says:\n"You’ve mastered my light systems, from glowing eyes to rainbow reactors. Now invent your own Ironman effect and make me shine like never before!"`,
  goal: `Use what you’ve learned in previous Classes to create a new Ironman light effect using loops, delays, and multiple outputs — invent a cool power-up or battle sequence!`,
  quiz: [
    {
      question: "What does for (int i = 0; i < 5; i++) do?",
      options: [
        "a) Starts blinking slowly",
        "b) Repeats the code block 5 times",
        "c) Waits for input"
      ],
      answer: "b"
    },
    {
      question: "What does digitalWrite(3, HIGH); do?",
      options: [
        "a) Reads sensor",
        "b) Turns pin 3 ON",
        "c) Turns off LED"
      ],
      answer: "b"
    },
    {
      question: "Which pin is usually used for Ironman's hand laser?",
      options: ["a) D4", "b) D3", "c) D8"],
      answer: "a"
    },
    {
      question: "How do you pause the code for 300 milliseconds?",
      options: ["a) wait(300);", "b) delay(300);", "c) delay();"],
      answer: "b"
    },
    {
      question: "What does pinMode(9, OUTPUT); prepare?",
      options: [
        "a) Analog sensor input",
        "b) Laser activation",
        "c) RGB LED control"
      ],
      answer: "c"
    }
  ],
  challenges: [
    {
      title: "Challenge 1: Ultra Pulse Mode",
      description: "Blink chest, eyes, and rainbow light 3 times using a loop.",
      bonus: ""
    },
    {
      title: "Challenge 2: Laser + Rocket Launch",
      description: "Fire laser (D4) and rocket LEDs (D3) with delay bursts.",
      bonus: ""
    },
    {
      title: "Challenge 3: Rainbow Alert",
      description: "Pulse RGB LED (D9) in loop — glow for alert mode.",
      bonus: ""
    },
    {
      title: "Challenge 4: Mega Blast Mode",
      description: "Use a for loop to turn on multiple pins one after another with delays (D2 → D8 → D10 → ...).",
      bonus: ""
    }
  ],
  code: `void setup() {\n  // Define your output pins here\n}\n\nvoid loop() {\n  // Write your custom blinking or power-up pattern\n}`,
  tips: [
    {
      title: "🔁 Use for loops to repeat actions",
      content: "➤ Great for blinking 5–10 times."
    },
    {
      title: "💡 Use multiple digitalWrite() lines",
      content: "➤ Control many lights at once!"
    },
    {
      title: "⏱️ Experiment with delay() timing",
      content: "➤ Try delay(100) for fast blink or delay(1000) for long hold."
    },
    {
      title: "🌈 RGB LED on D9",
      content: "➤ Can be pulsed like a rainbow glow using HIGH/LOW."
    },
    {
      title: "🧪 Test in pieces",
      content: "➤ First try one light, then combine others step-by-step."
    }
  ],
  wrapup: `After building your own Ironman effect, showcase it to your class or parents!\nLet them guess what it is — Flight Mode? Ultra Reactor? Stealth Mode?\nYou’ve now earned your Ironman Coding Medal – Blinker Pro Level! 🥇`
}
];

export default diyQnA;