"use client";

import React, { useEffect, useState } from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css'
import { getSessionId, getSubscriberId } from '../utils/session';

const Inbox: React.FC = () => {
  const [subscriberId, setSubscriberId] = useState<string>('');
  const [distinctId, setDistinctId] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSubscriberId(getSubscriberId());
      setDistinctId(getSessionId());
    }
  }, []);

  const workspaceKey = process.env.NEXT_PUBLIC_SUPRSEND_WORKSPACE_KEY || '';

  return (
    <div>
      {subscriberId && distinctId && (
        <SuprSendInbox
          workspaceKey={workspaceKey}
          subscriberId={subscriberId}
          distinctId={distinctId}
        />
      )}
    </div>
  );
};

export default Inbox;
