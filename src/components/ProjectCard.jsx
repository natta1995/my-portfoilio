import { useState, useRef } from "react";
import { XIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import defaultVideo from "../Video/default.mp4";


const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  list = [],
  longText,
  links = [],
  video,
  status,
  type,
  size,
}) => {
  const [open, setOpen] = useState(false);

  const isGithub = (url = "") => url.toLowerCase().includes("github.com");
  const videoToShow = video || defaultVideo;
  const videoRef = useRef(null);

  const handleFullscreen = () => {
  if (videoRef.current?.requestFullscreen) {
    videoRef.current.requestFullscreen();
  }
};

  return (
    <>
      {/* Card */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md"
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-52 w-full object-cover"
            loading="lazy"
          />

    {status && (
      <div className="absolute left-4 top-4 z-10 rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur">
        {status}
      </div>
    )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm font-medium text-white">
              Klicka för mer information
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{description}</p>
          <p className="mt-2 text-sm text-zinc-600">Typ: {type}</p>
          <p className="mt-2 text-sm text-zinc-600">Storlek: {size}</p>

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/40 sm:p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto my-4 w-full max-w-[95vw] min-h-[85vh] rounded-3xl border border-zinc-200 bg-white p-5 shadow-xl sm:my-8 sm:p-8 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Övre del */}
            <div className="border-b border-zinc-200 pb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    {title}
                  </h2>

                  {tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-zinc-200 bg-white p-2 text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900"
                  aria-label="Stäng"
                >
                  <XIcon size={18} />
                </button>
              </div>
            </div>

            {/* Nedre del */}
            <div className="mt-6 grid items-start gap-8 lg:grid-cols-3">
              {/* Vänster */}
              <div className="lg:col-span-1">
                {longText && <p className="text-zinc-600">{longText}</p>}

                {list.length > 0 && (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-zinc-600">
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                {links.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                          isGithub(l.href)
                            ? "bg-zinc-900 text-white hover:bg-zinc-800"
                            : "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50"
                        }`}
                      >
                        {isGithub(l.href) ? (
                          <GithubIcon size={18} />
                        ) : (
                          <ExternalLinkIcon size={18} />
                        )}
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Höger video */}
              <div className="lg:col-span-2">
                <p className="mb-2 text-sm text-zinc-500">
               Klicka på videon för att visa den i helskärm.
              </p>
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-zinc-50 bg-black shadow-lg">
                  <video
                    className="h-full w-full object-contain"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onClick={handleFullscreen}
                  >
                    <source src={videoToShow} type="video/mp4" />
                    Din webbläsare stödjer inte video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;