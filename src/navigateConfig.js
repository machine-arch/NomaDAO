const configuration = {
  booking: {
    home: {
      auth: {
        id: "1",
        name: "auth",
        display: "active",
        arrangement: "row",
        components: {
          sign_in: {
            id: "1",
            isActive: false,
            activeClass: "booking-auth-active-element",
          },
          sign_up: {
            id: "2",
            isActive: false,
            activeClass: "booking-auth-active-element",
          },
        },
      },
      search: {
        id: "1",
        name: "search",
        display: "active",
        arrangement: "row",
        components: {
          search__location: {
            id: "1",
            isActive: false,
            activeClass: "booking-search-active-element",
          },
          search__date: {
            id: "2",
            isActive: false,
            activeClass: "booking-search-active-element",
          },
          search__persons: {
            id: "3",
            isActive: false,
            activeClass: "booking-search-active-element",
          },
          search__Btn: {
            id: "4",
            className: "search__Btn",
            isActive: false,
            activeClass: "booking-search-active-element",
          },
        },
      },
      filter: {
        id: "2",
        name: "filter",
        display: "hidden",
        arrangement: "row",
        components: {
          back__btn: {
            id: "1",
            isActive: false,
            activeClass: "booking-filter-active-element",
            className: "back__btn",
          },
          filter__btn: {
            id: "2",
            isActive: false,
            activeClass: "booking-filter-active-element",
            className: "filter__btn",
          },
        },
      },
      results: {
        id: "4",
        name: "results",
        display: "hidden",
        arrangement: "column",
        type: "collection",
        factory: {
          index: 0,
          sequence: (index) => {
            return index + 1;
          },
          decrement: (index) => {
            return index !== 0 ? index - 1 : index;
          },
        },
        components: {
          booking__result__box: {
            id: "1",
            isActive: false,
            className: "booking__result__box",
            activeClass: "booking-active-element",
          },
        },
      },
      filter_box: {
        id: "3",
        name: "filter_box",
        display: "hidden",
        events: {
          keydown: {
            handler: "returnBack",
            key: "Backspace",
          },
        },
        home: {
          dimension: {
            id: "1",
            arrangement: "row",
            components: {
              filter__threed__btn: {
                id: "1",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "filter__threed__btn",
              },
            },
          },
          sort: {
            id: "2",
            arrangement: "row",
            components: {
              filter__partners__btn: {
                id: "2",
                isActive: false,
                activeClass: "booking-active-element",
                className: "filter__partners__btn",
              },
              filter__select__btn__default_1: {
                id: "3",
                isActive: false,
                activeClass: "booking-active-element",
                className: "filter__select__btn__default_1",
              },
              filter__select__btn__default_2: {
                id: "4",
                isActive: false,
                activeClass: "booking-active-element",
                className: "filter__select__btn__default_2",
              },
              filter__select__btn__default_3: {
                id: "5",
                isActive: false,
                activeClass: "booking-active-element",
                className: "filter__select__btn__default_3",
              },
              filter__select__btn__default_4: {
                id: "6",
                isActive: false,
                activeClass: "booking-active-element",
                className: "filter__select__btn__default_4",
              },
            },
          },
          perNight: {
            id: "3",
            arrangement: "row",
            components: {
              filter__perNight_min: {
                id: "7",
                isActive: false,
                activeClass: "booking-active-element",
                className: "filter__perNight_min",
              },
              filter__perNight_max: {
                id: "8",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "filter__perNight_max",
              },
            },
          },
          hotel_star: {
            id: "4",
            arrangement: "column",
            components: {
              checkbox_hotel_5_star: {
                id: "9",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotel_5_star",
              },
              checkbox_hotel_4_star: {
                id: "10",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotel_4_star",
              },
              checkbox_hotel_3_star: {
                id: "11",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotel_3_star",
              },
              checkbox_hotel_2_star: {
                id: "12",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotel_2_star",
              },
              checkbox_hotel_1_star: {
                id: "13",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotel_1_star",
              },
            },
          },
          review: {
            id: "5",
            arrangement: "column",
            components: {
              checkbox_review_5_star: {
                id: "14",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_review_5_star",
              },

              checkbox_review_4_star: {
                id: "15",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_review_4_star",
              },
              checkbox_review_3_star: {
                id: "16",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_review_3_star",
              },
              checkbox_review_2_star: {
                id: "17",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_review_2_star",
              },
              checkbox_review_1_star: {
                id: "18",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_review_1_star",
              },
            },
          },

          propertyType: {
            id: "6",
            arrangement: "column",
            components: {
              checkbox_propertyType_1: {
                id: "19",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_propertyType_1",
              },
              checkbox_propertyType_2: {
                id: "20",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_propertyType_2",
              },
              checkbox_propertyType_3: {
                id: "21",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_propertyType_3",
              },
              checkbox_propertyType_4: {
                id: "22",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_propertyType_4",
              },
              checkbox_propertyType_5: {
                id: "23",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_propertyType_5",
              },
            },
          },

          facilities: {
            id: "7",
            arrangement: "column",
            components: {
              checkbox_facilities_1: {
                id: "24",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_facilities_1",
              },
              checkbox_facilities_2: {
                id: "25",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_facilities_2",
              },
              checkbox_facilities_3: {
                id: "26",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_facilities_3",
              },
              checkbox_facilities_4: {
                id: "27",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_facilities_4",
              },
              checkbox_facilities_5: {
                id: "28",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_facilities_5",
              },
            },
          },
          hotelService: {
            id: "8",
            arrangement: "column",
            components: {
              checkbox_hotelService_1: {
                id: "29",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotelService_1",
              },
              checkbox_hotelService_2: {
                id: "30",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotelService_2",
              },
              checkbox_hotelService_3: {
                id: "31",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotelService_3",
              },
              checkbox_hotelService_4: {
                id: "32",
                isActive: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotelService_4",
              },
              checkbox_hotelService_5: {
                id: "33",
                isActive: false,
                hasSibling: false,
                activeClass: "booking-active-element",
                className: "checkbox_hotelService_5",
              },
            },
          },
        },
      },
      hotel_detalis: {
        id: "3",
        name: "filter_box",
        display: "hidden",
        home: {
          auth: {
            id: "1",
            name: "auth",
            display: "active",
            arrangement: "row",
            components: {
              sign_in: {
                id: "1",
                isActive: false,
                activeClass: "booking-active-element",
              },
              sign_up: {
                id: "2",
                isActive: false,
                activeClass: "booking-active-element",
              },
            },
          },
          back: {
            id: "2",
            name: "back",
            display: "active",
            arrangement: "row",
            components: {
              back__btn: {
                id: "1",
                isActive: false,
                activeClass: "booking-active-element",
                className: "back__btn",
              },
            },
          },
          slider: {
            id: "3",
            name: "slider",
            display: "active",
            arrangement: "row",
            components: {
              slider__btn: {
                id: "1",
                isActive: false,
                activeClass: "booking-active-element",
                className: "slider__btn",
              },
            },
          },
        },
      },
    },
  },
};

export default configuration;