let assert = chai.assert;

describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(''), false);
    });
    assert.equal(validateEmail(222), false, 'number error');
    assert.equal(validateEmail(true), false, 'boolean error');
    assert.equal(validateEmail({}), false, 'object error');
  });
  it("not an empty string", function () {
    assert.equal(validateEmail('     '), false);
  });
  it("email is longer than 5 characters", function () {
    assert.equal(validateEmail('gmail@.gmail'), false);
  });
})
describe('valid data', function () {
  it("Don\'t have the @ or @ the first character", function () {
    assert.isFalse(validateEmail('emailgmail.com'), 'Don\' have the @');
    assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
  });
  it("Don\'t have the @ greater than 1", function () {
    assert.isFalse(validateEmail('emai@gmai@l.com'), 'Don\' have the @ greater than 1');
  });
  it("Don\'t have the dot or dot befor @", function () {
    assert.isTrue(validateEmail('e.mail@gmail.com'), 'Have dot and dot after @');//true Тут не може бути, тому що є умова, щоб email був меньше 5 символів
    assert.isFalse(validateEmail('e.mail@gmailcom'), 'Don\'t have dot after @');
    assert.isFalse(validateEmail('e.mail.@gmail.com'), 'Dot befor @');
  });
})

