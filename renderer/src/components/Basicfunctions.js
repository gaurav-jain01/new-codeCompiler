import React, { useState } from 'react';

export default function ArduinoBasics() {
  const [showfunc, setshowfunc] = useState(true);

  return React.createElement(
    'div',
    {
      className: 'max-w-6xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-600 mt-10 font-sans scrollbar-hide'
    },
    React.createElement(
      'div',
      { className: 'flex items-center justify-between' },
      React.createElement(
        'h2',
        { className: 'text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4' },
        '🛠️ Basic Functions'
      ),
      React.createElement(
        'button',
        {
          onClick: () => setshowfunc(!showfunc),
          className: 'flex items-center gap-1 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded shadow-sm transition'
        },
        React.createElement('span', { className: 'text-lg' }, '👁'),
        showfunc ? 'Hide Functions' : 'Show Functions'
      )
    ),
    // Basic concepts
    showfunc && React.createElement(
      'div',
      {
        className: 'basicconcept p-8 border border-gray-50 dark:border-gray-700 rounded-lg'
      },
      React.createElement(
        'div',
        {
          className: 'border p-4 bg-gray-100 dark:bg-gray-700 mb-4 rounded-lg'
        },
        React.createElement(
          'p',
          { className: 'text-lg underline text-gray-900 dark:text-gray-100' },
          'Every class has two main functions:'
        ),
        React.createElement(
          'div',
          { className: 'mb-6' },
          React.createElement(
            'h3',
            { className: 'text-xl font-semibold text-gray-800 dark:text-gray-200' },
            '1. ',
            React.createElement('code', { className: 'bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded' }, 'setup()')
          ),
          React.createElement(
            'ul',
            { className: 'list-disc ml-6 text-gray-700 dark:text-gray-300' },
            React.createElement('li', null, 'Runs once when the device is powered on or reset.'),
            React.createElement('li', null, 'Used to initialize settings (e.g., pin modes, start serial communication).')
          )
        ),
        React.createElement(
          'div',
          { className: 'mb-6' },
          React.createElement(
            'h3',
            { className: 'text-xl font-semibold text-gray-800 dark:text-gray-200' },
            '2. ',
            React.createElement('code', { className: 'bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded' }, 'loop()')
          ),
          React.createElement(
            'ul',
            { className: 'list-disc ml-6 text-gray-700 dark:text-gray-300' },
            React.createElement('li', null, 'Runs repeatedly (in a loop).'),
            React.createElement('li', null, 'Contains the main logic of your program.')
          )
        )
      ),
      React.createElement(
        'h2',
        { className: 'text-2xl font-bold text-green-700 dark:text-green-400 mb-4' },
        '🔌 Basic Concepts'
      ),
      React.createElement(
        'div',
        { className: 'overflow-x-auto' },
        React.createElement(
          'table',
          {
            className: 'table-auto w-full border border-gray-300 dark:border-gray-600 text-left'
          },
          React.createElement(
            'thead',
            { className: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' },
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' },
                'Concept'
              ),
              React.createElement(
                'th',
                { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' },
                'Explanation'
              )
            )
          ),
          React.createElement(
            'tbody',
            { className: 'text-gray-700 dark:text-gray-300' },
            React.createElement(
              'tr',
              { className: 'hover:bg-gray-50 dark:hover:bg-gray-700' },
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'pinMode(pin, mode)'),
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'Sets the pin to input or output mode.')
            ),
            React.createElement(
              'tr',
              { className: 'hover:bg-gray-50 dark:hover:bg-gray-700' },
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'digitalWrite(pin, HIGH/LOW)'),
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'Turns output pin ON or OFF.')
            ),
            React.createElement(
              'tr',
              { className: 'hover:bg-gray-50 dark:hover:bg-gray-700' },
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'digitalRead(pin)'),
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'Reads input (like button press).')
            ),
            React.createElement(
              'tr',
              { className: 'hover:bg-gray-50 dark:hover:bg-gray-700' },
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'analogRead(pin)'),
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'Reads sensor values (0–1023).')
            ),
            React.createElement(
              'tr',
              { className: 'hover:bg-gray-50 dark:hover:bg-gray-700' },
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'analogWrite(pin, value)'),
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'Sends PWM signal (like dimming LED).')
            ),
            React.createElement(
              'tr',
              { className: 'hover:bg-gray-50 dark:hover:bg-gray-700' },
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'delay(ms)'),
              React.createElement('td', { className: 'px-4 py-2 border border-gray-300 dark:border-gray-600' }, 'Pauses the program for milliseconds.')
            )
          )
        )
      )
    )
  );
}