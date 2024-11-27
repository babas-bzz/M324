const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case red light`, () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });
});

describe('test suite traffic light undefined', () => {
    it('case red light', () => {
        expect(app.trafficLight(undefined)).toBe("OUT OF ORDER")
    });
})

describe('test suite traffic light orange', () => {
    it('case red light', () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!")
    });
})

describe('test suite traffic light green', () => {
    it('case red light', () => {
        expect(app.trafficLight("green")).toBe("WALK!")
    });
})


