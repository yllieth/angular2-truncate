//TODO: make tests effectively run

import { TruncatePipe } from "../../src/pipes/truncate.pipe";

describe('TruncatePipe', () => {
  let pipe = new TruncatePipe();

  it('does nothing if the strings has less character than the limit', () => {
    expect(pipe.transform('Lorem', 10, '...')).toBe('Lore');
  });

  it('trucate the string if input value has more character than the limit', () => {
    expect(pipe.transform('Lorem ipsum', 10, '...')).toBe('Lorem ipsu...');
  });
});