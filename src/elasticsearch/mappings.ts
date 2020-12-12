import { ApiResponse } from '@elastic/elasticsearch';
import { ESClient } from './client';

export const getMappings = async (
  indices: string[] = [],
): Promise<ApiResponse> => {
  try {
    return await ESClient.getInstance().indices.getMapping({
      index: indices,
      expand_wildcards: 'open',
    });
  } catch (err) {
    throw err;
  }
};