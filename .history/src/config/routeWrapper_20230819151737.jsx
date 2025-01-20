import React from "react";

export default function RouteWrapper() {
  return (
    <div>
      <Routes>
        <Route element={<Index />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
}
