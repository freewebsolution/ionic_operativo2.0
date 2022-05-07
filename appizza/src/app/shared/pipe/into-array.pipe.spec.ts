import { IntoArrayPipe } from './into-array.pipe';

describe('IntoArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new IntoArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
