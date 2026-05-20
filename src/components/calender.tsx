import { GitHubCalendar } from "react-github-calendar";

export default function MyCalendar() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <div className="calendar-wrapper">
      <GitHubCalendar
        username="superb-b"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme={isDark ? "dark" : "light"}
        weekStart={1}
         tooltips={{
          activity: {
            text: activity => `${activity.level} activities on ${activity.date}`,
            placement: 'right',
            offset: 6,
            hoverRestMs: 300,
            transitionStyles: {
              duration: 100,
              common: { fontFamily: 'monospace' },
            },
            withArrow: true,
          },
        }}
      />
    </div>
  );
}