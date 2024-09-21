import fs from 'fs';

const readDatabase = (filepath) => new Promise((resolve, reject) => {
  if (!filepath) {
    reject(new Error('Cannot load the database'));
  }
  if (filepath) {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data.trim().split('\n');
        const studGroups = {};
        const fieldNames = fileLines[0].split(',');
        const studPropValues = fieldNames.slice(0, fieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studValues = line.split(',');
          const stud = {};
          for (let i = 0; i < studPropValues.length; i++) {  // eslint-disable-line
            stud[studPropValues[i]] = studValues[i];
          }
          const group = studValues[studValues.length - 1];
          if (!studGroups[group]) {
            studGroups[group] = [];
          }
          studGroups[group].push(stud);
        }
        resolve(studGroups);
      }
    });
  }
});

export default readDatabase;
