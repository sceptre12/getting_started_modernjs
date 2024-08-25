/**
 * This application that can have its own custom render process
 * can still either use the built in router system by modern
 * or it can operate similary to profile_self_controlled. Meaning that it
 * can also operate in a self controlled manner
 *
 * This still uses the modern js run time pacakges
 */

import { createRoot } from '@modern-js/runtime/react';
import { render } from '@modern-js/runtime/browser';

const ModernRoot = createRoot();

render(<ModernRoot />);
