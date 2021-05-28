export default function movieStatusUse(currentStatus) {
  let status = '';
  let statusText = '';

  switch (currentStatus) {
    case 'cleanStatus':
      status = 'watchLater';
      statusText = 'watchLater';
      break;
    case 'watchLater':
      status = 'reminedOn';
      statusText = 'Reminder on';
      break;
    case 'reminedOn':
      status = 'watched';
      statusText = 'Watched';
      break;
    case 'watched':
      status = 'cleanStatus';
      statusText = 'cleanStatus';
      break;
  }

  return {
    status,
    statusText,
  };
}
