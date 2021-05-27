import { ipcRenderer } from 'electron';
import { Providers } from '@/providers';
import { Switch, Route } from 'react-router-dom';
import { RootRoute } from '@/routes';
import { AuthCallbackRoute } from '@/routes';
import styles from './App.module.css';

ipcRenderer.on('speechExit', (_, reason) => {
  console.log(reason);
});

ipcRenderer.on('speechError', (_, reason, error) => {
  console.log(reason, error);
});

ipcRenderer.on('speechData', (_, recognisedSpeech) => {
  console.log({ recognisedSpeech });
});

export const App = () => (
  <Providers>
    <div className={styles.root}>
      <div className={styles.content}>
        <Switch>
          <Route exact path='/' component={RootRoute} />
          <Route path='/auth-callback' component={AuthCallbackRoute} />
        </Switch>
      </div>
      <div className={styles.navigation}>Nav</div>
    </div>
  </Providers>
);