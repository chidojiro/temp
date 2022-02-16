import URI from 'urijs';

const replace = (segments: string[]) => {
  const uri = new URI();
  const currentSegments = uri.segment();
  const newSegments = [
    ...currentSegments.slice(0, currentSegments.length - segments.length),
    ...segments,
  ];

  return '/' + newSegments.join('/');
};

export const UriUtils = { replace };
