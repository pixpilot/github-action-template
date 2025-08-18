import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import * as core from '../__mocks__/core';

const waitMock = vi.fn();

vi.mock('@actions/core', () => core);
vi.mock('../src/wait', () => ({ wait: waitMock }));

const { run } = await import('../src/main');

describe('main.ts', () => {
  beforeEach(() => {
    vi.mocked(core.getInput).mockImplementation(() => '500');
    vi.mocked(waitMock).mockResolvedValue('done!');
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('sets the time output', async () => {
    await run();

    expect(vi.mocked(core.setOutput)).toHaveBeenNthCalledWith(
      1,
      'time',
      // Match HH:MM:SS
      expect.stringMatching(/^\d{2}:\d{2}:\d{2}/u),
    );
  });

  it('sets a failed status', async () => {
    vi.mocked(core.getInput).mockClear().mockReturnValueOnce('this is not a number');

    vi.mocked(waitMock)
      .mockClear()
      .mockRejectedValueOnce(new Error('milliseconds is not a number') as never);

    await run();

    expect(vi.mocked(core.setFailed)).toHaveBeenNthCalledWith(
      1,
      'milliseconds is not a number',
    );
  });
});
