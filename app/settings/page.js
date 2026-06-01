export default function SettingsPage() {
  return (
    <main className="ml-72 min-h-screen bg-slate-100">
      <div className="max-w-4xl mx-auto px-8 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-2 text-slate-500 text-lg">
            Manage your account preferences and application settings.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-slate-200
            shadow-lg
            overflow-hidden
          "
        >

          {/* Notifications */}
          <div className="p-8 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Notifications
            </h2>

            <div className="flex items-center justify-between">

              <div>
                <p className="font-medium text-slate-800">
                  Email Notifications
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Receive updates about courses and learning activity.
                </p>
              </div>

              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer sr-only"
                />

                <div
                  className="
                    h-6
                    w-11
                    rounded-full
                    bg-slate-300
                    peer-checked:bg-indigo-600
                    transition
                    after:absolute
                    after:left-[2px]
                    after:top-[2px]
                    after:h-5
                    after:w-5
                    after:rounded-full
                    after:bg-white
                    after:transition-all
                    peer-checked:after:translate-x-5
                  "
                />
              </label>

            </div>
          </div>

          {/* Appearance */}
          <div className="p-8 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Appearance
            </h2>

            <div className="flex items-center justify-between">

              <div>
                <p className="font-medium text-slate-800">
                  Dark Mode
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Enable dark theme for the dashboard.
                </p>
              </div>

              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                />

                <div
                  className="
                    h-6
                    w-11
                    rounded-full
                    bg-slate-300
                    peer-checked:bg-indigo-600
                    transition
                    after:absolute
                    after:left-[2px]
                    after:top-[2px]
                    after:h-5
                    after:w-5
                    after:rounded-full
                    after:bg-white
                    after:transition-all
                    peer-checked:after:translate-x-5
                  "
                />
              </label>

            </div>
          </div>

          {/* Learning */}
          <div className="p-8 border-b border-slate-100">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Learning Preferences
            </h2>

            <div className="flex items-center justify-between">

              <div>
                <p className="font-medium text-slate-800">
                  Course Reminders
                </p>

                <p className="text-sm text-slate-500 mt-1">
                  Receive reminders for incomplete courses.
                </p>
              </div>

              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer sr-only"
                />

                <div
                  className="
                    h-6
                    w-11
                    rounded-full
                    bg-slate-300
                    peer-checked:bg-indigo-600
                    transition
                    after:absolute
                    after:left-[2px]
                    after:top-[2px]
                    after:h-5
                    after:w-5
                    after:rounded-full
                    after:bg-white
                    after:transition-all
                    peer-checked:after:translate-x-5
                  "
                />
              </label>

            </div>
          </div>

          {/* Security */}
          <div className="p-8">

            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Security
            </h2>

            <button
              className="
                px-6
                py-3
                bg-slate-900
                text-white
                rounded-xl
                font-medium
                hover:bg-slate-800
                transition
              "
            >
              Change Password
            </button>

          </div>

        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">

          <button
            className="
              px-8
              py-3
              bg-indigo-600
              text-white
              rounded-xl
              font-semibold
              shadow-md
              hover:bg-indigo-700
              hover:shadow-lg
              transition-all
            "
          >
            Save Changes
          </button>

        </div>

      </div>
    </main>
  );
}