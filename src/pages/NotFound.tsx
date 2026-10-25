import { Link } from 'react-router';
import { PageHero } from '../components/Blocks';

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page has moved on.">
      <p>Unlike your organisation’s knowledge, this page wasn’t retained.</p>
      <p><Link to="/" className="btn btn-light">Back to home</Link></p>
    </PageHero>
  );
}
