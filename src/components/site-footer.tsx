import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { t } from "@/lib/copy";
import { usePrefs } from "@/store/prefs";

export function SiteFooter() {
  const copy = t(usePrefs((s) => s.lang));
  return (
    <footer className="mt-16 border-t border-line bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo invert />
          <p className="mt-4 max-w-md text-sm text-paper/75">{copy.footer.note}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-amber">On this site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/sdg4" className="hover:underline">
                SDG 4
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Live dashboard
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:underline">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/investors" className="hover:underline">
                Investors
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-amber">People</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/parents" className="hover:underline">
                Parents
              </Link>
            </li>
            <li>
              <Link to="/teachers" className="hover:underline">
                Teachers
              </Link>
            </li>
            <li>
              <Link to="/stories" className="hover:underline">
                Field stories
              </Link>
            </li>
            <li>
              <Link to="/newsroom" className="hover:underline">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-4 py-4 text-center text-xs text-paper/60">{copy.footer.privacy}</div>
    </footer>
  );
}
