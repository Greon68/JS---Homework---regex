
import Validator from '../regex'

 
test('проверка на истинность(правильность ввода имени)', () => {
    let user1 = new Validator ('qweR-233_s');
    const result = user1.validateUsername();
  
    expect(result).toBeTruthy();;
});

test('проверка на ложность(неверный ввод - знак # внутри)', () => {
    let user1 = new Validator ('q#wer-233_s');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - 4 цифры подряд )', () => {
    let user1 = new Validator ('qwer-2337_s');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - цифра вначале )', () => {
    let user1 = new Validator ('7qwer-233_s');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - "-" в начале )', () => {
    let user1 = new Validator ('-qwer-233_s');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - "_" в начале )', () => {
    let user1 = new Validator ('_qwer-233_s');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - "-" в конце )', () => {
    let user1 = new Validator ('qwer-233_s_');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - "_" в конце )', () => {
    let user1 = new Validator ('-qwer-233_s');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});

test('проверка на ложность(неверный ввод - цифра в конце )', () => {
    let user1 = new Validator ('qwer-233_s9');
    const result = user1.validateUsername();
  
    expect(result).toBeFalsy();;
});