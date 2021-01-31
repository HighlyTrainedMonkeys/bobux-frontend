<script>
  import Chart from "chart.js";
  import { onMount } from "svelte";

  onMount(() => {
    var ctx = document.getElementById("myChart");
    var config = {
      type: "bar",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets: [
          {
            label: "Bobux sales",
            backgroundColor: "#30b7ff",
            borderColor: "#5ec2f7",
            data: [1223, 2311, 233, 554, 904, 1300, 1900],
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Stats"
        },
        tooltips: {
          mode: "index",
          intersect: false
        },
        hover: {
          mode: "nearest",
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Day"
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Robux"
              }
            }
          ]
        }
      }
    };
    var myChart = new Chart(ctx, config);
  });
</script>

<div class="min-h-screen bg-gray-100">
  <header class="pb-24 bg-blue-500">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="relative flex flex-wrap items-center justify-center
        lg:justify-between">

        <div
          class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
            <!-- Left nav -->
            <div class="hidden lg:block lg:col-span-2">
              <nav class="flex space-x-4">
                <a
                  href="#"
                  class="text-white text-sm font-medium rounded-md bg-white
                  bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                  aria-current="page">
                  Back to main site
                </a>
              </nav>
            </div>
          </div>
        </div>

      </div>
    </div>

  </header>
  <main class="-mt-24 pb-8">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="sr-only">Profile</h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <!-- Welcome panel -->
          <section aria-labelledby="profile-overview-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <h2 class="sr-only" id="profile-overview-title">
                Profile Overview
              </h2>
              <div class="bg-white p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <div class="sm:flex sm:space-x-5">
                    <div class="flex-shrink-0">
                      <img
                        class="mx-auto h-20 w-20 rounded-full"
                        src="https://tr.rbxcdn.com/c3ee609e91804ee2f15c6375355a381a/150/150/AvatarHeadshot/Png"
                        alt="" />
                    </div>
                    <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p class="text-sm font-medium text-gray-600">
                        Welcome back,
                      </p>
                      <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                        Grangus
                      </p>
                      <p class="text-sm font-medium text-gray-600">
                        Administrator, Reseller
                      </p>
                    </div>
                  </div>
                  <div class="mt-5 flex justify-center sm:mt-0">
                    <a
                      href="#"
                      class="flex justify-center items-center px-4 py-2 border
                      border-gray-300 shadow-sm text-sm font-medium rounded-md
                      text-gray-700 bg-white hover:bg-gray-50 w-full sm:w-auto">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="border-t border-gray-200 bg-gray-50 grid grid-cols-1
                divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0
                sm:divide-x">
                <div class="px-6 py-5 text-sm font-medium text-center">
                  <span class="text-gray-900">129,643</span>
                  <span class="text-gray-600">Robux Sold</span>
                </div>

                <div class="px-6 py-5 text-sm font-medium text-center">
                  <span class="text-gray-900">4</span>
                  <span class="text-gray-600">Groups on site</span>
                </div>
              </div>
            </div>
          </section>

          <!-- stats panel -->
          <section>
            <div
              class="rounded-lg bg-white overflow-hidden shadow divide-y
              divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px">
              <canvas id="myChart" class="w-full sm:h-auto px-2 py-2" />
            </div>
          </section>

          <!-- groups panel -->
          <section>
            <div
              class="rounded-lg bg-white overflow-hidden shadow divide-y
              divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px">

              <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="m-4">
                <h2
                  class="text-gray-500 text-xs font-medium uppercase
                  tracking-wide">
                  Groups stocked
                </h2>
                <ul class="mt-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
                  <li class="col-span-1 flex shadow-sm rounded-md">
                    <div
                      class="flex-shrink-0 flex items-center justify-center
                      bg-white text-white text-sm font-medium rounded-l-md
                      border">
                      <img
                        src="https://t2.rbxcdn.com/75e2748110dcfc339bd55a298d23b388"
                        alt=""
                        class="h-32 w-32" />
                    </div>
                    <div
                      class="flex-1 flex items-center justify-between border-t
                      border-r border-b border-gray-200 bg-white rounded-r-md
                      truncate">
                      <div class="flex-1 px-4 py-2 text-sm truncate">
                        <a
                          href="#"
                          class="text-gray-900 font-medium hover:text-gray-600">
                          Ice Age Baby
                        </a>
                        <p class="text-gray-500">19,299 Robux</p>
                        <p class="text-gray-700">Stocker: You</p>
                      </div>
                      <div class="flex-shrink-0 pr-2">
                        <button
                          class="w-8 h-8 bg-white inline-flex items-center
                          justify-center text-gray-400 rounded-full
                          bg-transparent hover:text-gray-500 focus:outline-none
                          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <svg
                            class="h-8 h-8 hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>

            </div>
          </section>

          <!-- admin actions panel -->
          <section>
            <div
              class="rounded-lg bg-white overflow-hidden shadow divide-y
              divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1 sm:gap-px">
              <h2
                class="text-gray-500 text-xs font-medium uppercase tracking-wide
                m-4">
                Admin actions
              </h2>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-4 mb-4">
                <div
                  class="relative rounded-lg border border-gray-300 bg-white
                  px-6 py-5 shadow-sm flex items-center space-x-3">

                  <div class="flex-1 min-w-0">
                    <h1 class="font-medium text-md">Blacklist user</h1>
                    <div class="mt-3">
                      <label
                        for="blacklist_user"
                        class="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="blacklist_user"
                          id="blacklist_user"
                          class="shadow-sm focus:ring-blue-500
                          focus:border-blue-500 block w-full sm:text-sm
                          border-gray-300 rounded-md"
                          placeholder="Builderman" />
                      </div>
                    </div>

                    <div class="mt-3">
                      <a
                        href="#"
                        class="w-full flex justify-center items-center px-4 py-2
                        border border-gray-300 shadow-sm text-sm font-medium
                        rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Blacklist user
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="relative rounded-lg border border-gray-300 bg-white
                  px-6 py-5 shadow-sm flex items-center space-x-3">

                  <div class="flex-1 min-w-0">
                    <h1 class="font-medium text-md">Update user balance</h1>
                    <div class="mt-3">
                      <label
                        for="balance_update_user"
                        class="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="balance_update_user"
                          id="balance_update_user"
                          class="shadow-sm focus:ring-blue-500
                          focus:border-blue-500 block w-full sm:text-sm
                          border-gray-300 rounded-md"
                          placeholder="Builderman" />
                      </div>
                    </div>

                    <div class="mt-3">
                      <label
                        for="balance_update_new"
                        class="block text-sm font-medium text-gray-700">
                        Balance
                      </label>
                      <div class="mt-1">
                        <input
                          type="number"
                          name="balance_update_new"
                          id="balance_update_new"
                          class="shadow-sm focus:ring-blue-500
                          focus:border-blue-500 block w-full sm:text-sm
                          border-gray-300 rounded-md"
                          placeholder="100" />
                      </div>
                    </div>

                    <div class="mt-3">
                      <a
                        href="#"
                        class="w-full flex justify-center items-center px-4 py-2
                        border border-gray-300 shadow-sm text-sm font-medium
                        rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Update user
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="relative rounded-lg border border-gray-300 bg-white
                  px-6 py-5 shadow-sm flex items-center space-x-3">

                  <div class="flex-1 min-w-0">
                    <h1 class="font-medium text-md">
                      Generate registration token
                    </h1>

                    <div class="mt-3">
                      <a
                        href="#"
                        class="w-full flex justify-center items-center px-4 py-2
                        border border-gray-300 shadow-sm text-sm font-medium
                        rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Generate
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="relative rounded-lg border border-gray-300 bg-white
                  px-6 py-5 shadow-sm flex items-center space-x-3">

                  <div class="flex-1 min-w-0">
                    <h1 class="font-medium text-md">Retrieve staff info</h1>
                    <div class="mt-3">
                      <label
                        for="staff_username"
                        class="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="staff_username"
                          id="staff_username"
                          class="shadow-sm focus:ring-blue-500
                          focus:border-blue-500 block w-full sm:text-sm
                          border-gray-300 rounded-md"
                          placeholder="grangus" />
                      </div>
                    </div>

                    <div class="mt-3">
                      <a
                        href="#"
                        class="w-full flex justify-center items-center px-4 py-2
                        border border-gray-300 shadow-sm text-sm font-medium
                        rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Retrieve info
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4">
          <!-- Announcements -->
          <section aria-labelledby="announcements-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <div class="p-6">
                <h2
                  class="text-base font-medium text-gray-900"
                  id="announcements-title">
                  Manage groups
                </h2>
                <div class="flow-root mt-6">
                  <div class="pb-6 border-b">
                    <h1 class="font-medium text-gray-800 pb-4">Add group</h1>
                    <div>
                      <label
                        for="cookie"
                        class="block text-sm font-medium text-gray-700">
                        Cookie
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="cookie"
                          id="cookie"
                          class="shadow-sm focus:ring-blue-500
                          focus:border-blue-500 block w-full sm:text-sm
                          border-gray-300 rounded-md"
                          placeholder=".ROBLOSECURITY" />
                      </div>
                    </div>

                    <div class="mt-3">
                      <label
                        for="group_id"
                        class="block text-sm font-medium text-gray-700">
                        Group ID
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="group_id"
                          id="group_id"
                          class="shadow-sm focus:ring-blue-500
                          focus:border-blue-500 block w-full sm:text-sm
                          border-gray-300 rounded-md"
                          placeholder="3634363" />
                      </div>
                    </div>

                    <div class="mt-3">
                      <a
                        href="#"
                        class="w-full flex justify-center items-center px-4 py-2
                        border border-gray-300 shadow-sm text-sm font-medium
                        rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Add group
                      </a>
                    </div>
                  </div>

                  <h1 class="font-medium text-gray-800 mt-6">Remove group</h1>
                  <div class="mt-3">
                    <label
                      for="group_id"
                      class="block text-sm font-medium text-gray-700">
                      Group ID
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="group_id"
                        id="group_id"
                        class="shadow-sm focus:ring-blue-500
                        focus:border-blue-500 block w-full sm:text-sm
                        border-gray-300 rounded-md"
                        placeholder="3634363" />
                    </div>
                  </div>

                  <div class="mt-3">
                    <a
                      href="#"
                      class="w-full flex justify-center items-center px-4 py-2
                      border border-gray-300 shadow-sm text-sm font-medium
                      rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Add group
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="recent-hires-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <div class="p-6">
                <h2
                  class="text-base font-medium text-gray-900"
                  id="recent-hires-title">
                  Request payout
                </h2>
                <div class="flow-root mt-4">
                  <div class="mb-4">
                    <label
                      for="method"
                      class="block text-sm font-medium text-gray-700">
                      Payout method
                    </label>
                    <select
                      id="method"
                      name="method"
                      class="mt-1 block w-full pl-3 pr-10 py-2 text-base
                      border-gray-300 focus:outline-none focus:ring-blue-500
                      focus:border-blue-500 sm:text-sm rounded-md">
                      <option selected>Bitcoin</option>
                      <option>PayPal</option>
                    </select>
                  </div>

                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700">
                    BTC Address/PayPal Email
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      class="shadow-sm focus:ring-blue-500 focus:border-blue-500
                      block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="BTC Address/PayPal Email" />
                  </div>
                </div>
                <div class="mt-6">
                  <a
                    href="#"
                    class="w-full flex justify-center items-center px-4 py-2
                    border border-gray-300 shadow-sm text-sm font-medium
                    rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Submit request
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</div>
