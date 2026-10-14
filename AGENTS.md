<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the SELLO demo in a reusable browser-safe React module mounted by the index route; the same module is bundled into the standalone HTML to avoid divergent flows.
- Keep simulation state versioned in browser storage and never persist passwords; this demo does not use real authentication or external service writes.
- Define the demo design system in its plain CSS stylesheet so the standalone HTML and app share identical visual tokens.
